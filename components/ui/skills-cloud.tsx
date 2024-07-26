import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "php",
  "bootstrap5",
  "mysql",
  "c#",
  "node",
  "next",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudSkills() {
  return (
    <div className="relative flex h-[80%] w-full max-w-[40rem] items-center justify-center
     overflow-hidden rounded-lg p-10 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
