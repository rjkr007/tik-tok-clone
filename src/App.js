import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    //BEM
    <div className="app">
      {/* <h1>Hello, Let's build Tik Tok Clone</h1> */}

      <div className="app__videos">
        <Video
          url="https://webapp-va.tiktok.com/4771aee202bc8212b6c55463f02329ea/60c89343/tos-useast2a-ve-0068c002/bf347dafb09a467e9d6bdc9ea3532bd8?a=1988&br=3000&bt=1500&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=3&ds=3&er=&l=20210615054511010190209081210B52F8&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MiwiY2siOiJ0dF93ZWJpZF92MiIsInVpZCI6IjY5NzM3MzIyMjc5MTQ3Mjg0NDkifQ%3D%3D&qs=0&rc=M3Z4ODo7Ojk2NjMzNzgzM0ApaTVkOzVmNzxoNzw2Nmk4M2drbWUuZ2QzbjFgLS1kLzZzc2MuNDNeLWAzYjUwLmBeYDQ6Yw%3D%3D&vl=&vr="
          channel="rk"
          description="Wow it works"
          song="khushi .."
          likes={100}
          messages={300}
          shares={200}
        />
        <Video
          url="https://webapp-va.tiktok.com/4771aee202bc8212b6c55463f02329ea/60c89343/tos-useast2a-ve-0068c002/bf347dafb09a467e9d6bdc9ea3532bd8?a=1988&br=3000&bt=1500&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=3&ds=3&er=&l=20210615054511010190209081210B52F8&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MiwiY2siOiJ0dF93ZWJpZF92MiIsInVpZCI6IjY5NzM3MzIyMjc5MTQ3Mjg0NDkifQ%3D%3D&qs=0&rc=M3Z4ODo7Ojk2NjMzNzgzM0ApaTVkOzVmNzxoNzw2Nmk4M2drbWUuZ2QzbjFgLS1kLzZzc2MuNDNeLWAzYjUwLmBeYDQ6Yw%3D%3D&vl=&vr="
          channel="rk"
          description="Wow it works"
          song="khushi khushi.."
          likes={123}
          messages={400}
          shares={200}
        />
        <Video
          url="https://webapp-va.tiktok.com/4771aee202bc8212b6c55463f02329ea/60c89343/tos-useast2a-ve-0068c002/bf347dafb09a467e9d6bdc9ea3532bd8?a=1988&br=3000&bt=1500&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=3&ds=3&er=&l=20210615054511010190209081210B52F8&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MiwiY2siOiJ0dF93ZWJpZF92MiIsInVpZCI6IjY5NzM3MzIyMjc5MTQ3Mjg0NDkifQ%3D%3D&qs=0&rc=M3Z4ODo7Ojk2NjMzNzgzM0ApaTVkOzVmNzxoNzw2Nmk4M2drbWUuZ2QzbjFgLS1kLzZzc2MuNDNeLWAzYjUwLmBeYDQ6Yw%3D%3D&vl=&vr="
          channel="rk"
          description="Wow it works"
          song="khushi khushi khushi..."
          likes={153}
          messages={200}
          shares={205}
        />
        <Video
          url="https://webapp-va.tiktok.com/4771aee202bc8212b6c55463f02329ea/60c89343/tos-useast2a-ve-0068c002/bf347dafb09a467e9d6bdc9ea3532bd8?a=1988&br=3000&bt=1500&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=3&ds=3&er=&l=20210615054511010190209081210B52F8&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=eyJ2bSI6MiwiY2siOiJ0dF93ZWJpZF92MiIsInVpZCI6IjY5NzM3MzIyMjc5MTQ3Mjg0NDkifQ%3D%3D&qs=0&rc=M3Z4ODo7Ojk2NjMzNzgzM0ApaTVkOzVmNzxoNzw2Nmk4M2drbWUuZ2QzbjFgLS1kLzZzc2MuNDNeLWAzYjUwLmBeYDQ6Yw%3D%3D&vl=&vr="
          channel="rk"
          description="Wow it works"
          song="khushi............."
          likes={183}
          messages={300}
          shares={290}
        />
      </div>
    </div>
  );
}

export default App;
