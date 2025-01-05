import React from "react";
import DashboardSectionDivider from "./DashboardSectionDivider";

function Notifications() {
  return (
    <div className="h-full bg-alabaster">
      <div className=" mx-8 pt-8">
        <div
          className="font-inter  font-semibold text-mirage"
          style={{ fontSize: "30px" }}
        >
          Notifications
        </div>
        <div
          className="mt-10 font-inter text-mirage font-semibold"
          style={{ fontSize: "18px" }}
        >
          Email notifications
        </div>
        <div
          className="mt-2.5 font-inter text-riverbed font-normal text-sm"
          style={{ lineHeight: "1.43" }}
        >
          Get emails to find out what’s going on when you’re not online. You can
          turn them off anytime.
        </div>
        <DashboardSectionDivider />
        <div className="flex mt-7 items-baseline">
          <div className="flex flex-col w-72">
            <div
              className="font-inter text-mirage font-semibold"
              style={{ font: "14px" }}
            >
              Notifications from us
            </div>
            <div className="font-inter text-riverbed font-normal text-sm">
              Receive the latest news, updates and industry tutorials from us.
            </div>
          </div>
          <div className="flex flex-col ml-24">
            <div className="flex items-baseline gap-2">
              <input type="checkbox" className="w-[12px] h-[12px]" />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ font: "14px" }}
                >
                  News and updates
                </div>
                <div
                  className="font-inter text-[#344054] font-normal"
                  style={{ font: "14px" }}
                >
                  News about product and feature updates.
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <input type="checkbox" className="w-[12px] h-[12px]" />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ font: "14px" }}
                >
                  Tips and tutorials
                </div>
                <div
                  className="font-inter text-[#344054] font-normal"
                  style={{ font: "14px" }}
                >
                  Tips on getting more out of Untitled.
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardSectionDivider />
        <div className="flex mt-7 items-baseline w-[72]">
          <div className="flex flex-col">
            <div
              className="font-inter text-mirage font-semibold w-72"
              style={{ font: "14px" }}
            >
              Comments
            </div>
            <div className="font-inter text-riverbed font-normal text-sm">
              These are notifications for comments on
              <br /> your posts and replies to your questions.
            </div>
          </div>
          <div className="flex flex-col ml-24">
            <div className="flex items-baseline gap-2">
              <input
                type="radio"
                className="w-[12px] h-[12px]"
                name="comment-notifications"
                value="none"
              />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ font: "14px" }}
                >
                  Do not notify me
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <input
                type="radio"
                className="w-[12px] h-[12px]"
                name="comment-notifications"
                value="mentions"
              />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ font: "14px" }}
                >
                  Mentions only
                </div>
                <div
                  className="font-inter text-[#344054] font-normal"
                  style={{ font: "14px" }}
                >
                  Only notify me if i'm mentioned in a comment.
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <input
                type="radio"
                className="w-[12px] h-[12px]"
                name="comment-notifications"
                value="all"
              />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ font: "14px" }}
                >
                  All reminders
                </div>
                <div
                  className="font-inter text-[#344054] font-normal"
                  style={{ font: "14px" }}
                >
                  Notify me for all reminders.
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardSectionDivider />
        <div className="flex mt-7 items-baseline w-[72]">
          <div className="flex flex-col">
            <div
              className="font-inter text-mirage font-semibold"
              style={{ font: "14px" }}
            >
              Reminders
            </div>
            <div className="font-inter text-riverbed font-normal text-sm">
              These are notifications to remind you of updates you might have
              missed.
            </div>
          </div>
          <div className="flex flex-col ml-24">
            <div className="flex items-baseline gap-2">
              <input
                type="radio"
                className="w-[12px] h-[12px]"
                name="reminder-notifications"
                value="none"
              />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ fontSize: "14px" }}
                >
                  Do not notify me
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <input
                type="radio"
                className="w-[12px] h-[12px]"
                name="reminder-notifications"
                value="mentions"
              />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ fontSize: "14px" }}
                >
                  Mentions only
                </div>
                <div
                  className="font-inter text-[#344054] font-normal"
                  style={{ fontSize: "14px" }}
                >
                  Only notify me if i'm mentioned in a comment.
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <input
                type="radio"
                className="w-[12px] h-[12px]"
                name="reminder-notifications"
                value="all"
              />
              <div className="flex flex-col">
                <div
                  className="font-inter text-[#344054] font-medium"
                  style={{ fontSize: "14px" }}
                >
                  All reminders
                </div>
                <div
                  className="font-inter text-[#344054] font-normal"
                  style={{ fontSize: "14px" }}
                >
                  Notify me for all reminders.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
