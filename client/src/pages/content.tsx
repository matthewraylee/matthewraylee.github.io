import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";

export default function Content() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <motion.h1 
                className="text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                A Dream Visualized - The Masters
              </motion.h1>

              <motion.div 
                className="relative aspect-[4/3] w-full mb-6"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <img
                  src="/masters-photo.png"
                  alt="Masters Champion"
                  className="rounded-lg object-cover w-full h-full"
                />
              </motion.div>

              <motion.p 
                className="text-lg text-center text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Wearing the prestigious green jacket at Augusta National - 
                where passion meets achievement.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}