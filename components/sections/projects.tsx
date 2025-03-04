import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Unity",
    description: "Social Step Tracker",
    image: "https://matthewraylee.github.io/static/media/opentoklogo.8761864d.png"
  },
  {
    title: "OpenTok",
    description: "Social App",
    image: "https://matthewraylee.github.io/static/media/opentoklogo.8761864d.png"
  },
  {
    title: "Caraoke",
    description: "Lyrics on the Go!",
    image: "https://matthewraylee.github.io/static/media/CARAOKE.fc6811ff.png"
  },
  {
    title: "Image Classification",
    description: "Computer Vision",
    image: "https://matthewraylee.github.io/static/media/MNISTpic.b04e9093.jpeg"
  },
  {
    title: "Triples",
    description: "Mini Game",
    image: "https://matthewraylee.github.io/static/media/opentoklogo.8761864d.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
