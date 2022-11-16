interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="light">
      <article>{children}</article>
    </main>
  );
}
