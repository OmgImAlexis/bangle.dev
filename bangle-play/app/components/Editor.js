import React from 'react';
import PropTypes from 'prop-types';

import { getIdleCallback, uuid } from 'bangle-core/utils/js-utils';
import { specSheet } from '../editor/spec-sheet';
import { collabRequestHandlers } from 'bangle-plugins/collab/client/collab-request-handlers';
import * as collab from 'bangle-plugins/collab/client/collab-extension';
import { corePlugins } from 'bangle-core/components';
import { config } from '../editor/config';
import { emoji, emojiInlineSuggest } from 'bangle-plugins/emoji/index';
import * as floatingMenu from 'bangle-plugins/inline-menu/floating-menu';
import * as linkMenu from 'bangle-plugins/inline-menu/link-menu';
import { PluginKey } from 'prosemirror-state';
import { trailingNode } from 'bangle-plugins/trailing-node/index';
import { timestamp } from 'bangle-plugins/timestamp/index';
import { isJestIntegration } from 'bangle-core/utils/process-env';
import { ReactEditor } from 'bangle-react/react-editor';
import { dino, stopwatch } from 'bangle-react/components/index';

const LOG = false;
const DEBUG = true;
let log = LOG ? console.log.bind(console, 'play/Editor') : () => {};

const getScrollContainerDOM = (view) => {
  return view.dom.parentElement.parentElement;
};

const getPlugins = ({ docName, manager }) => {
  const collabOpts = {
    docName: docName,
    clientId: 'client-' + uuid(4),
    ...collabRequestHandlers((...args) =>
      // TODO fix this resp.body
      manager.handleRequest(...args).then((resp) => resp.body),
    ),
  };
  const linkMenuKey = new PluginKey('linkMenuKeyYes');
  return [
    linkMenu.plugins({
      key: linkMenuKey,
      getScrollContainerDOM,
    }),
    floatingMenu.plugins({
      getScrollContainerDOM,
      linkMenuKey,
    }),
    emojiInlineSuggest.plugins({
      markName: 'emoji_inline_suggest',
      trigger: ':',
    }),
    ...corePlugins({ node: { heading: { levels: config.headingLevels } } }),
    collab.plugins(collabOpts),
    emoji.plugins(),
    stopwatch.plugins(),
    trailingNode.plugins(),
    timestamp.plugins(),
    dino.plugins(),
  ];
};

export class Editor extends React.PureComponent {
  static propTypes = {
    isFirst: PropTypes.bool.isRequired,
    manager: PropTypes.object.isRequired,
    docName: PropTypes.string.isRequired,
  };
  devtools = this.props.isFirst && (isJestIntegration() || DEBUG);

  options = {
    id: 'bangle-play-' + this.props.docName + '-' + uuid(4),
    content: 'Loading document',
    devtools: this.devtools,
    specSheet,
    plugins: getPlugins({
      docName: this.props.docName,
      manager: this.props.manager,
    }),
    editorProps: {
      attributes: { class: 'bangle-editor content' },
    },
  };

  componentWillUnmount() {
    console.log('unmounting editor', this.props.docName);
    if (this.props.isFirst) {
      window.editor = undefined;
    }
  }

  onEditorReady = (editor) => {
    if (this.props.isFirst) {
      window.editor = editor;

      getIdleCallback(() => {
        import(
          /* webpackChunkName: "prosemirror-dev-tools" */ 'prosemirror-dev-tools'
        ).then((args) => {
          this.devtools = args.applyDevTools(editor.view);
        });
      });
    }
  };

  renderNodeViews = ({ node, ...args }) => {
    if (node.type.name === 'dino') {
      return <dino.Dino node={node} {...args} />;
    }
    if (node.type.name === 'stopwatch') {
      return <stopwatch.Stopwatch node={node} {...args} />;
    }
  };

  render() {
    return (
      <>
        <ReactEditor
          options={this.options}
          onReady={this.onEditorReady}
          renderNodeViews={this.renderNodeViews}
        />
      </>
    );
  }
}
