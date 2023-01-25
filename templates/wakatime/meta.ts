// Generated using "yarn build-templates"

export const meta = {
  name: "Wakapi",
  description:
    "A minimalist, self-hosted WakaTime-compatible backend for coding statistics",
  instructions: null,
  changeLog: [{ date: "2023-1-24", description: "first release" }],
  links: [
    { label: "Website", url: "https://wakapi.dev/" },
    { label: "Github", url: "https://github.com/muety/wakapi" },
  ],
  contributors: [
    { name: "Supernova3339", url: "https://github.com/Supernova3339" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "wakapi",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "n1try/wakapi:2.6.1",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
}