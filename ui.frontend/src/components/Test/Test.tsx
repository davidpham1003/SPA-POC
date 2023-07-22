import { MapTo, MappedComponentProperties } from '@adobe/aem-react-editable-components';
import React from 'react';
import { ComponentType } from 'react-universal-component';

interface Config<P extends MappedComponentProperties> {
    emptyLabel?: string;
    isEmpty(_props: P): boolean;
    resourceType?: string;
    forceReload?: boolean;
}

interface TestProp extends ComponentType<MappedComponentProperties> {
    title?: string,
}


const TestConfig: Config<MappedComponentProperties> = {
    emptyLabel: 'Test',
    isEmpty: function (props: TestProp) {
        return !props || !props.title;
    }
}

function Test(props: TestProp): JSX.Element {
    return (<>
        {props.title}
    </>);
}

export default Test;

MapTo("poc-spa/components/test")(Test, TestConfig);