import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailName',
})
export class MailNamePipe implements PipeTransform {
  transform(mail: string) {
    const atIdx = mail.indexOf('@');

    return mail.slice(0, atIdx);
  }
}
