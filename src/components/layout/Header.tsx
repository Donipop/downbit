import styles from "./header.module.css";

export default function Header() {
    const isLogin = false;
  return (
    <header>
        <div>
            <div className={styles.main}>
                <h1>
                    <a title="DownBit" href="/" className={styles.logo}>DwonBit</a>
                </h1>

                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <a href="/trade">거래소</a>
                        </li>
                        <li className={styles.li}>
                            <a href="/contact">투자내역</a>
                        </li>
                    </ul>
                </nav>
                {isLogin ?  (
                <div className={styles.login}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <a href="/logout">로그아웃</a>
                        </li>
                        <li className={styles.li}>
                            <a href="/mypage">회원정보</a>
                        </li>
                    </ul>
                </div>
                ) : (
                    <div className={styles.login}>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <a href="/login">로그인</a>
                            </li>
                            <li className={styles.li}>
                                <a href="/signup">회원가입</a>
                            </li>
                        </ul>
                    </div> )}
            </div>
        </div>
    </header>
  );
}
