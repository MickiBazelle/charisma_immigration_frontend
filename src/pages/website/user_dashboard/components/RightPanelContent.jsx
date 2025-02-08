import React from "react";
import CollapsibleCourseItem from "./CollapsibleCourseItem";
import PropTypes from "prop-types";

function RightPanelContent({ chapters, isSubscribed, pricing }) {
  // Calculate total progress
  const calculateProgress = () => {
    if (!chapters || chapters.length === 0)
      return { percent: 0, completed: 0, total: 0 };

    let totalVideos = 0;
    chapters.forEach((chapter) => {
      totalVideos += chapter.contents.length;
    });

    // TODO: Add completed videos tracking
    const completedVideos = 0;
    const progressPercent =
      totalVideos > 0 ? (completedVideos / totalVideos) * 100 : 0;

    return {
      percent: progressPercent,
      completed: completedVideos,
      total: totalVideos,
    };
  };

  const progress = calculateProgress();

  return (
    <div>
      <div
        className="font-inter font-semibold mt-[2rem]"
        style={{ fontSize: "18px" }}
      >
        Your course progress
      </div>
      <div className="mt-3 w-full h-[76px] bg-catskillWhite rounded-xl">
        <div className="pt-4 px-4 font-inter">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{progress.percent.toFixed(0)}%</div>
            <div className="text-riverBed">
              {progress.completed}/{progress.total} lessons
            </div>
          </div>
          <div className="flex">
            <div className="mt-2 w-full h-[8px] bg-dawnPink rounded-lg"></div>
            <div
              className="absolute mt-2 h-[8px] bg-dodgerBlue rounded-lg"
              style={{ width: `${progress.percent}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="pt-6 font-inter font-semibold"
        style={{ fontSize: "18px" }}
      >
        Course Content
      </div>

      <div className="pt-2">
        {chapters?.map((chapter) => (
          <CollapsibleCourseItem
            key={chapter.id}
            title={chapter.title}
            duration={chapter.total_duration_display}
            content={
              <div className="space-y-4">
                {chapter.contents.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {content.title}
                      </p>
                      {content.duration_display !== "0:00" && (
                        <p className="text-xs text-gray-500 mt-1">
                          Duration: {content.duration_display}
                        </p>
                      )}
                    </div>
                    {!isSubscribed && (
                      <span className="text-xs text-orange-500 whitespace-nowrap">
                        Subscribe to unlock
                      </span>
                    )}
                  </div>
                ))}
              </div>
            }
          />
        ))}
      </div>

      {!isSubscribed && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900">
            Subscribe to access all content
          </h3>
          <div className="mt-2 space-y-2">
            <p className="text-sm text-blue-800">
              Monthly: ${pricing.monthly.price}/{pricing.monthly.duration}
            </p>
            <p className="text-sm text-blue-800">
              Quarterly: ${pricing.quarterly.price}/{pricing.quarterly.duration}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

RightPanelContent.propTypes = {
  chapters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      contents: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          duration_display: PropTypes.string,
        })
      ).isRequired,
      total_duration_display: PropTypes.string,
    })
  ),
  isSubscribed: PropTypes.bool,
  pricing: PropTypes.shape({
    monthly: PropTypes.shape({
      price: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
    }),
    quarterly: PropTypes.shape({
      price: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  }),
};

export default RightPanelContent;
