import { Card, CardTitle, CardContent } from "./ui/card";
import Image from "next/image";

type MovieCardProps = {
  readonly title: string;
  readonly image: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <Image src={image} alt={title} width={300} height={450} />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
