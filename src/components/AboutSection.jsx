import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-2 mb:grid-cols-1 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Passionate Web Developer</h3>
                        <p className="text-muted-foreground">
                            Whatever text I want to include here to describe my passion for web development.
                        </p>
                        <p className="text-muted-foreground">
                            And another paragraph to elaborate on my skills and experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="contact" className="cosmic-button">
                                Get in touch
                            </a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">
                                Download CV
                            </a>

                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className ="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Building responsive and accessible web applications.
                                    </p>
                                </div>    
                            </div>
                        </div>
                        <div className ="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">User Experience</h4>
                                    <p className="text-muted-foreground">
                                        Creating intuitive and user-friendly interfaces.
                                    </p>
                                </div>    
                            </div>
                        </div>
                        <div className ="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Overseeing projects from conception to completion.
                                    </p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}