import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FdDatetime } from '@fundamental-ngx/core';

@Component({
    selector: 'fd-datetime-form-example',
    templateUrl: './datetime-form-example.component.html'
})
export class DatetimeFormExampleComponent {
    customForm = new FormGroup({
        date: new FormControl(FdDatetime.getToday())
    });
}