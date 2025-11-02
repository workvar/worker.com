import Image from "next/image";
import { ReactNode } from "react";

type NotificationProps = {
  photo: string;
  platform: ReactNode | string;
  name: string;
  message: string;
};

const Notification = ({ photo, platform, name, message }: NotificationProps) => {
  return (
    <div className="relative w-[400px] rounded-2xl overflow-hidden notification-banner opacity-0">


      {/* Content */}
      <div className="relative px-4 py-3 flex items-center gap-3 bg-white/60">
        {/* Profile Picture with Platform Icon Overlay */}
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
            <Image
              src={photo}
              alt={name}
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Platform Icon Overlay */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-200/50">
            {typeof platform === "string" ? (
              <Image
                src={platform}
                alt="platform"
                width={20}
                height={20}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="w-4 h-4 text-gray-700 flex items-center justify-center">
                {platform}
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <p className="text-gray-900 font-bold text-base leading-tight truncate">
            {name}
          </p>
          <p className="text-gray-500 text-sm font-normal leading-tight line-clamp-2">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
