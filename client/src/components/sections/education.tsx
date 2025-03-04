import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    school: "University of Washington",
    location: "Seattle, WA",
    degree: "Master of Science in Information Systems",
    period: "2023 - Present",
    link: "https://www.washington.edu/"
  },
  {
    school: "University of Maryland",
    location: "College Park, MD",
    degree: "Bachelor of Science, Computer Science",
    minor: "Minor in Innovation and Entrepreneurship",
    period: "Aug 2020 - May 2023",
    link: "http://www.umd.edu/"
  },
  {
    school: "Green River College",
    location: "Auburn, WA",
    degree: "Associates in Science, Computer Science Track",
    period: "Sep 2018 - Jun 2020",
    link: "http://www.greenriver.edu/"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <a 
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold hover:text-primary transition-colors"
                      >
                        {edu.school}
                      </a>
                      <span className="text-muted-foreground">{edu.period}</span>
                    </div>
                    <div className="text-lg font-medium mb-1">{edu.degree}</div>
                    {edu.minor && (
                      <div className="text-lg font-medium mb-1">{edu.minor}</div>
                    )}
                    <div className="text-muted-foreground">{edu.location}</div>
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