# Three.js Basic Project

Welcome to my first Three.js project! This project is a simple implementation of a 3D scene with the following features:

## Features

1. **3D Model**: A 3D model is rendered within the scene, providing an interactive visual experience.
2. **HDRI Lighting**: High Dynamic Range Image (HDRI) lighting is used to enhance the scene's realism.
3. **Orbit Controls**: Users can interact with the scene using orbit controls to rotate, zoom, and pan.
4. **Responsive Design**: The scene adjusts dynamically to fit the browser window size, ensuring a consistent experience across devices.


## Setup and Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies (if applicable):
   ```bash
   npm install
   ```

4. Start a local server to view the project. You can use a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code or run:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` (or the appropriate port).

## How It Works

- The 3D model is loaded using GLTF loaders and is displayed within the scene.
- HDRI lighting is applied to enhance reflections and realism.
- OrbitControls allow users to navigate the scene interactively.
- The `resize` event listener ensures the canvas resizes dynamically with the browser window.


## Acknowledgments

- Thanks to the Three.js community for extensive resources and documentation.
- Special thanks to open-source HDRI providers and 3D model creators.

## License

This project is open-source and available under the MIT License.

---

Enjoy exploring the 3D scene!

