import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepare to turn your idea into the reality? I am here to help
          </h2>
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600">Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
