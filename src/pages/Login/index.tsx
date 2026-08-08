import styles from "./styles.module.css";
import Logo from "../../components/Logo";
import Lock from "../../assets/icons/Lock.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Digite sua senha"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
    <div>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
      </header>

      <div className={styles.loginCard}>
        <div className={styles.lock}>
          <img src={Lock}/>
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>Acesso restrito</h1>
          <p className={styles.subtitle}>
            Painel administrativo · Cop{"{IN}"}ha
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">E-MAIL</label>
            <input
              id="email"
              type="email"
              placeholder="admin@copinha.com"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="senha">SENHA</label>
            <input
              id="senha"
              type="password"
              placeholder="**********"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Entrar no painel
          </button>
        </form>

        <p className={styles.footerText}>
          Acesso exclusivo para administradores
        </p>
      </div>
    </div>
  );
}