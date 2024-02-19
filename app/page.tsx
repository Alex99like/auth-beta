import { ArrowLeft } from '@/assets/arrow-left';
import styles from './page.module.scss'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconGoogle } from '@/assets/google-icon';
import { AppleIcon } from '@/assets/apple-icon';

export default function Home() {
  return (
    <main>
       <div className={styles.wrapper}>
      <header className={styles.header}>
        <button>
          <ArrowLeft />
        </button>
        <h3>
          Создать Аккаунт
        </h3>
      </header>
      <div className={styles.mail}>
        <div className={styles.field}>
          <span>Почта</span>
          <Input />
        </div>
        <p>Вы получите ссылку приглашение на вашу почту</p>
        <Button variant={'ghost'} size={'lg'}>
          Создать
        </Button>
      </div>
      <div className={styles.oauth}>
        <span>
          Создать профиль в один клик
        </span>
        <div>
          <button>
            <IconGoogle />
          </button>
          <button>
            <AppleIcon />
          </button>
        </div>
      </div>
    </div>
    </main>
  );
}
