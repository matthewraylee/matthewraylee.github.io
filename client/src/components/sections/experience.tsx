import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock, Building2 } from "lucide-react";

const experiences = [
  {
    title: "API Developer Intern",
    company: "Siemens Mobility",
    location: "Seattle, WA",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Optimized rail transportation through updating and testing multiple APIs",
      "Worked with a team to enhance transportation infrastructure systems",
      "Contributed to improving system efficiency and reliability"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <CalendarClock className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-lg font-medium mb-4">
                      <Building2 className="h-4 w-4 mr-2" />
                      {exp.company} - {exp.location}
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
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
