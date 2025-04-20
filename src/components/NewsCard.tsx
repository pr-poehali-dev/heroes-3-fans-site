import { ReactNode } from "react";

interface NewsCardProps {
  title: string;
  date: string;
  children: ReactNode;
}

const NewsCard = ({ title, date, children }: NewsCardProps) => {
  return (
    <div className="pixel-card mb-6">
      <h3 className="font-pixel text-xl text-homm3-gold mb-2">{title}</h3>
      <p className="text-sm text-homm3-sky mb-3">{date}</p>
      <div className="text-foreground">
        {children}
      </div>
    </div>
  );
};

export default NewsCard;
