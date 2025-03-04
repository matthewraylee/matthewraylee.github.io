import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Let's Talk!</h2>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                Seeking Full-time Opportunities 👀
              </h3>
              
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/matthewraylee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.github.com/matthewraylee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
