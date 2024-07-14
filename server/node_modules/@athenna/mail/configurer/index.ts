/**
 * @athenna/mail
 *
 * (c) João Lenon <lenon@athenna.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { File, Path } from '@athenna/common'
import { BaseConfigurer } from '@athenna/artisan'

export default class MailConfigurer extends BaseConfigurer {
  public async configure() {
    await this.logger
      .task()
      .addPromise(`Create mail.${Path.ext()} config file`, () => {
        return new File('./mail').copy(Path.config(`mail.${Path.ext()}`))
      })
      .addPromise('Update providers of .athennarc.json', () => {
        return this.rc
          .pushTo('providers', '@athenna/mail/providers/MailProvider')
          .pushTo('providers', '@athenna/mail/providers/SmtpServerProvider')
          .save()
      })
      .addPromise('Update .env, .env.test and .env.example', () => {
        const envs =
          '\nMAIL_MAILER=smtp\n' +
          'MAIL_HOST=localhost\n' +
          'MAIL_PORT=5025\n' +
          'MAIL_USERNAME=\n' +
          'MAIL_PASSWORD=\n'

        return new File(Path.pwd('.env'), '')
          .append(envs)
          .then(() => new File(Path.pwd('.env.test'), '').append(envs))
          .then(() => new File(Path.pwd('.env.example'), '').append(envs))
      })
      .run()
  }
}
