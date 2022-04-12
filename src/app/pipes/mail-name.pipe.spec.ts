import { MailNamePipe } from './mail-name.pipe';

describe('MailNamePipe', () => {
  it('create an instance', () => {
    const pipe = new MailNamePipe();
    expect(pipe).toBeTruthy();
  });
});
