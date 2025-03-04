import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-4">
                    During my time as an API Developer Intern, I had the opportunity to 
                    optimize rail transportation through updating and testing multiple APIs.
                  </p>
                  <p className="text-lg">
                    I am excited to continue exploring new technologies and be part of an 
                    innovative team that makes a positive impact. Feel free to explore my 
                    projects and reach out for collaborations or exciting opportunities.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <img
                    src="https://matthewraylee.github.io/static/media/matt_about1.c6321fa4.jpg"
                    alt="Matthew Lee"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
