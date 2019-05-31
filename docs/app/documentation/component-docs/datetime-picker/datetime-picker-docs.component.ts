import { Component } from '@angular/core';

import * as dateTimeSimpleHtml from '!raw-loader!./examples/datetime-example/datetime-example.component.html';
import * as dateTimeSimpleTs from '!raw-loader!./examples/datetime-example/datetime-example.component.ts';

import * as dateTimeNonMeridianHtml from '!raw-loader!./examples/datetime-non-meridian-example/datetime-non-meridian-example.component.html';
import * as dateTimeNonMeridianTs from '!raw-loader!./examples/datetime-non-meridian-example/datetime-non-meridian-example.component.ts';

import * as dateTimeProgHtml from '!raw-loader!./examples/datetime-program-example/datetime-program-example.component.html';
import * as dateTimeProgTs from '!raw-loader!./examples/datetime-program-example/datetime-program-example.component.ts';

import * as dateTimePickerAllowNullTs from '!raw-loader!./examples/datetime-allow-null-example/datetime-allow-null-example.component.ts';

import * as dateTimePickerFormHtml from '!raw-loader!./examples/datetime-form-example/datetime-form-example.component.html';
import * as dateTimePickerFormTs from '!raw-loader!./examples/datetime-form-example/datetime-form-example.component.ts';

@Component({
    selector: 'app-datetime-picker-docs',
    templateUrl: './datetime-picker-docs.component.html',
    styleUrls: ['./datetime-picker-docs.component.scss']
})
export class DatetimePickerDocsComponent {
    datetimePickerSingleHtml = dateTimeSimpleHtml;
    datetimePickerSingleTs = dateTimeSimpleTs;

    datetimeNonMerHtml = dateTimeNonMeridianHtml;
    datetimeNonMerTs = dateTimeNonMeridianTs;

    datetimeProgramHtml = dateTimeProgHtml;
    datetimeProgramTs = dateTimeProgTs;

    datetimePickerAllowNullTs = dateTimePickerAllowNullTs;

    datetimePickerFormHtml = dateTimePickerFormHtml;
    datetimePickerFormTs = dateTimePickerFormTs;
}
