interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <h1 className="text-center text-3xl font-medium">{title}</h1>;
}
