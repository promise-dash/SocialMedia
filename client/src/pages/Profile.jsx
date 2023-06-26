import React from "react";
import Feed from "../components/Feed";
import ProfileCard from "../components/ProfileCard";
import ProfileLeft from "../components/ProfileLeft";
import Widgets from "../components/Widgets";

const UserProfile = () => {
  return (
    <section className="flex gap-5">
        <ProfileLeft/>

        <div className="flex flex-col basis-[50%] gap-[1rem] h-fit">
            <ProfileCard/>
            <Feed/>
        </div>

        <Widgets/>
    </section>
  )
}

export default UserProfile;