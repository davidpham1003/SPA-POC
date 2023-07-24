/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import sanitizeHtml from 'sanitize-html';
import sanitizeWhiteList from '../sanitize-html.whitelist';

import React from 'react';
import extractModelId from '../../utils/extract-model-id';
import { LazyTextComponent } from '../import-components';
import { EditConfig, MapTo, MappedComponentProperties } from '@adobe/aem-react-editable-components';

/**
 * Text React component
 */

interface TextModel extends MappedComponentProperties {
    text?: string;
    richText?: boolean;
    cqPath: string;
    id?: string;
}

/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig: EditConfig<TextModel> = {
    emptyLabel: 'Text',

    isEmpty: function (props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

function Text(props: any) {
	const getRichTextContent = () => {
		return (
			<div
				id={extractModelId(props.cqPath)}
				data-rte-editelement
				dangerouslySetInnerHTML={{
					__html: sanitizeHtml(props.text, sanitizeWhiteList)
				}}
			/>
		);
	}

	const getTextContent = () => {
		return <div>{props.text}</div>;
	}

	return props.richText ? getRichTextContent() : getTextContent();
}

export default Text;

MapTo('poc-spa/components/text')(LazyTextComponent, TextEditConfig);