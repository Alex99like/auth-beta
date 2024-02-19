'use client'

import { ArrowLeft } from '@/assets/arrow-left';
import styles from './page.module.scss'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconGoogle } from '@/assets/google-icon';
import { AppleIcon } from '@/assets/apple-icon';
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()
 
  return (
    <main>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <button>
            <ArrowLeft />
          </button>
          <h3>
            {data?.user?.name || 'Создать Аккаунт'}
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
          <Button variant={'ghost'} size={'lg'} onClick={() => signOut()}>
            Выйти
          </Button>
        </div>
        <div className={styles.oauth}>
          <span>
            Создать профиль в один клик
          </span>
          <div>
            <button onClick={() => signIn('google')}>
              <IconGoogle />
            </button>
            <button onClick={() => signIn('yandex')}>
              <AppleIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
