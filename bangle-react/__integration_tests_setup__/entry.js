import './entry.css';
import { BangleEditor } from 'bangle-core/editor';
import { corePlugins, coreSpec } from 'bangle-core/index';
import { SpecSheet } from 'bangle-core/spec-sheet';
import { Slice } from 'prosemirror-model';
import { DOMSerializer } from 'prosemirror-model';

import * as bangleComponents from 'bangle-react/components/index';

import * as prosemirrorView from 'prosemirror-view';

window.prosemirrorView = prosemirrorView;

console.debug('Bangle-react entry.js');

function setup() {
  const element = document.createElement('div');
  window.document.body.appendChild(element);
  element.setAttribute('id', 'root');
  const editorContainer = document.createElement('div');
  editorContainer.setAttribute('id', 'pm-root');
  element.appendChild(editorContainer);
  setupEditor(editorContainer);
}

function setupEditor(container) {
  const specSheet = new SpecSheet([...coreSpec(), ...bangleComponents.spec()]);
  const plugins = [...corePlugins(), ...bangleComponents.plugins()];
  window.commands = bangleComponents.commands;

  window.editor = new BangleEditor(container, {
    specSheet,
    plugins,
  });
  window.dispatcher = (command) =>
    command(
      window.editor.view.state,
      window.editor.view.dispatch,
      window.editor.view,
    );
}

setup();

const createEvent = (name, options = {}) => {
  let event;
  if (options.bubbles === undefined) {
    options.bubbles = true;
  }
  if (options.cancelable === undefined) {
    options.cancelable = true;
  }
  if (options.composed === undefined) {
    options.composed = true;
  }
  event = new Event(name, options);

  return event;
};

window.manualPaste = function manualPaste(htmlStr) {
  function sliceSingleNode(slice) {
    return slice.openStart === 0 &&
      slice.openEnd === 0 &&
      slice.content.childCount === 1
      ? slice.content.firstChild
      : null;
  }

  function doPaste(view, text, html, e) {
    let slice = prosemirrorView.__parseFromClipboard(
      view,
      text,
      html,
      view.shiftKey,
      view.state.selection.$from,
    );

    if (
      view.someProp('handlePaste', (f) => f(view, e, slice || Slice.empty)) ||
      !slice
    ) {
      return;
    }

    let singleNode = sliceSingleNode(slice);
    let tr = singleNode
      ? view.state.tr.replaceSelectionWith(singleNode, view.shiftKey)
      : view.state.tr.replaceSelection(slice);
    view.dispatch(
      tr.scrollIntoView().setMeta('paste', true).setMeta('uiEvent', 'paste'),
    );
  }
  const pasteEvent = createEvent('paste');

  doPaste(window.editor.view, null, htmlStr, pasteEvent);
};

window.domSerializer = function domSerializer() {
  return DOMSerializer.fromSchema(window.editor.view.state.schema);
};