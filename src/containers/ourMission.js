import { OurMission } from "../components";

const MissionContent = (props) => {
  const { img, text, position } = props;
  return (
    <>
      <div className={position === "left" ? "left" : "right"}>
        {position === "left" ? (
          <img src={img.src} alt={img.alt} />
        ) : (
          <>
            <h3>{text.title}</h3>
            <p>{text.body}</p>
          </>
        )}
      </div>
      <div className={position === "left" ? "right" : "left"}>
        {position === "left" ? (
          <>
            <h3>{text.title}</h3>
            <p>{text.body}</p>
          </>
        ) : (
          <img src={img.src} alt={img.alt} />
        )}
      </div>
    </>
  );
};

export function OurMissionContainer() {
  return (
    <OurMission>
      <OurMission.Info>
        <MissionContent
          position="left"
          img={{
            src: "./img/OurMission/OurMission-sectionOne-blue.jpg",
            alt: "Chocolate Factory",
          }}
          text={{
            title: "The Problem",
            body: "The chocolate supply chain isn't fair for everyone. It begins with many farmers who grow cocoa and ends with lots of people who love chocolate. But what happens in between? Only a few big chocolate companies control that part. They make a lot of money by paying farmers very little for their cocoa. This makes life really hard for the farmers, and some even have to use child labor or become slaves.",
          }}
        />
      </OurMission.Info>
      <OurMission.Info>
        <MissionContent
          position="right"
          img={{
            src: "./img/OurMission/OurMission-sectionTwo-transparent.png",
            alt: "Drawing of people next to a choco plant",
          }}
          text={{
            title: "What?! Modern Slavery?",
            body: "Slavery continues to be a troubling issue on cocoa farms in West Africa due to the unequal distribution of resources. However, Tony's Chocolonely is committed to bringing about change and putting an end to this injustice. They believe that everyone deserves to be treated fairly and that no one should be forced into labor or slavery.",
          }}
        />
      </OurMission.Info>
      <OurMission.Info>
        <MissionContent
          position="left"
          img={{
            src: "./img/OurMission/OurMission-sectionThree-yellow.png",
            alt: "Our Vision",
          }}
          text={{
            title: "Tony's route to 100% slave-free chocolate",
            body: "Our goal is to have all chocolate in the world be 100% free from slavery. It's not just about our chocolate, but all chocolate everywhere. How are we going to make that happen? It's going to be challenging and there are many things to consider. But with the help of Tony's roadmap, we have a plan. The roadmap has three important pillars that will guide us towards achieving our goal of having 100% slave-free chocolate.",
          }}
        />
      </OurMission.Info>
      <OurMission.Info>
        <MissionContent
          position="right"
          img={{
            src: "./img/OurMission/OurMission-sectionFour-tran.png",
            alt: "Drawing of people next to a choco plant",
          }}
          text={{
            title: "Tony's 5 Sourcing Principles for slave-free cocoa",
            body: "We believe that chocolate can be made in a better way, and we lead by example with our incredibly delicious chocolate. We show the world that it's possible to make chocolate without using slaves. By following Tony's Sourcing Principles for cocoa, we ensure that our chocolate is free from slavery. And the best part is, we can still be successful as a business while making slave-free chocolate.",
          }}
        />
      </OurMission.Info>
      <OurMission.Info>
        <MissionContent
          position="left"
          img={{
            src: "./img/OurMission/OurMission-sectionFive-tran.png",
            alt: "Our Vision",
          }}
          text={{
            title: "All hands on deck!",
            body: "We know that we can't achieve our goal alone. While we are committed to making slave-free chocolate, we need everyone to join us in this mission. It's a collective effort, and we all need to roll up our sleeves and take action. So, what can you do to help? Share our story, raise awareness about the issue of slavery in the chocolate industry, and support companies that prioritize slave-free cocoa. Together, we can create a significant impact and make slave-free chocolate the norm.",
          }}
        />
      </OurMission.Info>
    </OurMission>
  );
}
