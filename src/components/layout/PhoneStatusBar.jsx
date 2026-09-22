import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export const PhoneStatusBar = () => {
  return (
    <div className="phone-status-bar">
      <span>9:41</span>
      <div className="phone-dynamic-island"></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <Signal size={14} />
        <Wifi size={14} />
        <Battery size={16} />
      </div>
    </div>
  );
};
