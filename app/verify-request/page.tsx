import { Button } from '@/components/ui/button'
import styles from './verify.module.scss'

const PageVerify = () => {
  return (
    <div className={styles.wrapper}>
      <h4>На вашу почту была отправлена ссылка. Зайдите на почту и перейдите по ней</h4>
      <span>(Если сообщение не пришло в течение минуты, проверьте папку “Спам”)</span>
      <a href="https://mail.google.com" target="_blank">
        <Button variant={'secondary'} size={'lg'}>
          Открыть почту
        </Button>
      </a>
    </div>
  )
}

export default PageVerify