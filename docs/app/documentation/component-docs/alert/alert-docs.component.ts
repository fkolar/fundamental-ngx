import { Component } from '@angular/core';
import { Schema } from '../../../schema/models/schema.model';
import { SchemaFactoryService } from '../../../schema/services/schema-factory/schema-factory.service';

import * as alertExampleHtml from '!raw-loader!./examples/alert-example.component.html';
import * as alertExampleTs from '!raw-loader!./examples/alert-example.component.ts';
import * as alertContent from '!raw-loader!./examples/alert-content.component.ts';
import * as alertComponentAsContentExample from '!raw-loader!./examples/alert-component-as-content-example.component.ts';
import * as alertComponentAsContentExampleH from '!raw-loader!./examples/alert-component-as-content-example.component.html';
import * as alertInlineExampleHtml from '!raw-loader!./examples/alert-inline-example.component.html';
import * as alertWidthExampleHtml from '!raw-loader!./examples/alert-width-example.component.html';
import { ExampleFile } from '../../core-helpers/code-example/example-file';

@Component({
    selector: 'app-alert',
    templateUrl: './alert-docs.component.html'
})
export class AlertDocsComponent {
    static schema: any = {
        properties: {
            properties: {
                type: 'object',
                properties: {
                    dismissible: {
                        type: 'boolean'
                    },
                    mousePersist: {
                        type: 'boolean'
                    },
                    width: {
                        type: 'string'
                    },
                    message: {
                        type: 'string'
                    },
                    duration: {
                        type: 'string'
                    }
                }
            },
            modifier: {
                type: 'object',
                properties: {
                    type: {
                        type: 'string',
                        enum: ['default', 'warning', 'error', 'success', 'information']
                    }
                }
            }
        },
        type: 'object'
    };

    schema: Schema;

    data: any = {
        properties: {
            dismissible: true,
            width: '100%',
            message: 'This is an alert message.',
            duration: 10000,
            mousePersist: true
        },
        modifier: {
            type: 'default'
        }
    };

    alertBasicExample: ExampleFile[] = [
        {
            language: 'html',
            code: alertExampleHtml
        },
        {
            language: 'typescript',
            code: alertExampleTs
        }
    ];

    alertComponentContentExample: ExampleFile[] = [
        {
            language: 'html',
            code: alertComponentAsContentExampleH
        },
        {
            language: 'typescript',
            code: alertComponentAsContentExample
        },
        {
            language: 'typescript',
            code: alertContent,
            name: 'Alert Content'
        }
    ];

    alertInlineExample: ExampleFile[] = [{
        language: 'html',
        code: alertInlineExampleHtml
    }];

    alertWidthExample: ExampleFile[] = [{
        language: 'html',
        code: alertWidthExampleHtml
    }];

    constructor(private schemaFactory: SchemaFactoryService) {
        this.schema = this.schemaFactory.getComponent('alert');
    }

    onSchemaValues(data) {
        this.data = data;
    }
}
