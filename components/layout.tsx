interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main>
      <article>{children}</article>
    </main>
  );
}
