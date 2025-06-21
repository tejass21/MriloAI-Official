
import { Download, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const CTASection = () => {
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setDeviceType('ios');
    } else if (/Android/.test(userAgent)) {
      setDeviceType('android');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  const getAppStoreLink = () => {
    if (deviceType === 'ios') {
      return 'https://apps.apple.com/app/mriloai';
    } else if (deviceType === 'android') {
      return 'https://play.google.com/store/apps/details?id=com.mriloai';
    }
    return '#';
  };

  const getAppStoreBadge = () => {
    if (deviceType === 'ios') {
      return (
        <img 
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
          alt="Download on the App Store" 
          className="h-12"
        />
      );
    } else if (deviceType === 'android') {
      return (
        <img 
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
          alt="Get it on Google Play" 
          className="h-12"
        />
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* Primary CTA - Download App */}
      <div className="flex flex-col items-center gap-3">
        <a 
          href={getAppStoreLink()}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-3"
        >
          <Download className="w-5 h-5" />
          Download the App
        </a>
        
        {/* App Store Badges */}
        {deviceType !== 'desktop' && (
          <a href={getAppStoreLink()} className="hover:opacity-80 transition-opacity">
            {getAppStoreBadge()}
          </a>
        )}
        
        {deviceType === 'desktop' && (
          <div className="flex gap-4">
            <a 
              href="https://apps.apple.com/app/mriloai"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store" 
                className="h-10"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.mriloai"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-10"
              />
            </a>
          </div>
        )}
      </div>

      {/* Secondary CTA - Web Version */}
      <div className="flex flex-col items-center gap-2">
        <button className="bg-white text-gray-700 px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all duration-200 flex items-center gap-2 font-medium">
          <Rocket className="w-4 h-4" />
          Try Web Version
        </button>
        <p className="text-sm text-gray-500">No signup needed • Get started instantly</p>
      </div>
    </div>
  );
};

export default CTASection;
