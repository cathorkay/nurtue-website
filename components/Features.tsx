import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useMediaQuery from "@mui/material/useMediaQuery";
import CommentIcon from "@mui/icons-material/Comment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Image from "components/Image";

const features = [
  {
    name: "Community",
    description:
      "Share your parenting struggles to get advice from fellow parents  and experts in the field.",
    icon: <CommentIcon />,
    image: "feature-1.png",
  },
  {
    name: "Conflict Resolution",
    description:
      "Resolve a conflict with your child in a peaceful and guided manner, and come to an agreement that you can reference later.",
    icon: <SupervisorAccountIcon />,
    image: "feature-2.png",
  },
  {
    name: "Practice",
    description:
      "Practice an effective language to communicate with your child through interactive quizzes.",
    icon: <AssignmentTurnedInIcon />,
    image: "feature-3.png",
  },
];

const FeatureImage: React.FC<{ feature: typeof features[0] }> = ({
  feature,
}) => {
  return (
    <Image
      className="w-full absolute inset-y-0 my-auto object-contain"
      style={{ height: "96.8%" }}
      src={feature.image}
      alt={`feature screenshot of ${feature.name}`}
      width={600}
      height={1298}
    />
  );
};

const Features: React.FC<{ on: boolean }> = ({ on }) => {
  const sm = useMediaQuery("(min-width:640px)");

  const [selectedFeature, setSelectedFeature] = useState(0);
  const [featureCarouselOn, setFeatureCarouselOn] = useState(on);

  const handleFeatureOver = (id: number) => {
    setFeatureCarouselOn(false);
    setSelectedFeature(id);
  };

  const handleFeatureLeave = () => {
    setFeatureCarouselOn(true);
  };

  useEffect(() => {
    setFeatureCarouselOn(on);
  }, [on]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (sm && featureCarouselOn) {
        setSelectedFeature((s) => (s + 1) % features.length);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [sm, featureCarouselOn]);

  return (
    <section className="section bg-theme-lightblue">
      <div className="h-full container mx-auto flex flex-row items-center justify-center px-6 lg:px-28 space-x-0 sm:space-x-16 pt-14 sm:pt-16">
        <div className="flex flex-col sm:w-3/5 space-y-2 sm:space-y-8 text-theme-black">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Features</h2>
          {features.map((f, index) => (
            <div
              key={f.name}
              className={`w-full p-4 sm:p-4 flex flex-row items-center space-x-4 sm:space-x-4 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer ${
                selectedFeature === index
                  ? "shadow-xl bg-theme-black text-white"
                  : "shadow-md bg-white text-theme-black"
              }`}
              onMouseOver={() => handleFeatureOver(index)}
              onMouseLeave={handleFeatureLeave}
            >
              {f.icon}
              <div>
                <h3 className="text-lg sm:text-2xl font-medium mb-1">
                  {f.name}
                </h3>
                {f.description}
              </div>
            </div>
          ))}
        </div>
        {sm && (
          <div className="w-2/5 h-3/5 relative">
            <TransitionGroup>
              <CSSTransition
                key={features[selectedFeature].name}
                timeout={500}
                classNames="feature-screenshot"
              >
                <FeatureImage feature={features[selectedFeature]} />
              </CSSTransition>
            </TransitionGroup>
            <Image
              className="w-full h-full object-contain relative"
              src="iphone-frame.png"
              alt="iphone frame"
              width={600}
              height={1188}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
