// VE.Direct Protocol Version 3.26 from 27 November 2018
// Classification of all state attributes possible
const state_attrb = {
	'awayModeReminder' : {
		name: 'Away Mode  Reminder',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'Actual_Humidity' : {
		name: 'Away Mode  Reminder',
		type: 'boolean',
		role: 'value.humidity',
		unit:  '%'
	},
	'Actual_Temperature' : {
		name: 'Away Mode  Reminder',
		type: 'boolean',
		role: 'value.temperature',
		unit:  '°C'
	},
	'batteryState' : {
		name: 'Battery State',
		type: 'mixed',
		role: 'indicator.lowbat ',
		unit:  ''
	}, 
	'connectionState' : {
		name: 'Connection State',
		type: 'boolean',
		role: 'indicator.connected',
		unit:  ''
	}, 
	'currentFwVersion' : {
		name: 'Current Fw Version',
		type: 'number',
		role: 'state',
		unit:  ''
	}, 
	'dazzleEnabled' : {
		name: 'Dazzle  Enabled',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'dateCreated' : {
		name: 'date Created',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'dazzleMode' : {
		name: 'Dazzle  Mode',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'deviceType' : {
		name: 'Device Type',
		type: 'mixed',
		role: 'info.name',
		unit:  ''
	}, 
	'duties' : {
		name: 'Duties',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'energySavingsReportReminder' : {
		name: 'Energy Savings Report  Reminder',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'heatingPower' : {
		name: 'Serial Number',
		type: 'number',
		role: 'value',
		unit:  '%'
	},
	'id' : {
		name: 'id',
		type: 'mixed',
		role: 'state',
		unit:  ''
	},
	'geolocationOverride' : {
		name: 'Geolocation Override',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'geolocationOverrideDisableTime' : {
		name: 'Geolocation Override Disable Time',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'geoTrackingEnabled' : {
		name: 'Geo Tracking Enabled',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'homeModeReminder' : {
		name: 'Home Mode Reminder',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'installationCompleted' : {
		name: 'Installation Completed',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'latitude' : {
		name: 'Latitude',
		type: 'number',
		role: 'value.gps.latitude',
		unit:  ''
	},
	'longtitude' : {
		name: 'Longtitude',
		type: 'number',
		role: 'value.gps.longitude',
		unit:  ''
	},
	'link' : {
		name: 'Link',
		type: 'mixed',
		role: 'value',
		unit:  ''
	},
	'lowBatteryReminder' : {
		name: 'lowBatteryReminder',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'mountingState' : {
		name: 'Sensor Data Points',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'nextScheduleChange' : {
		name: 'Next Schedule Change',
		type: 'array',
		role: 'state',
		unit:  ''
	}, 
	'nextTimeBlock' : {
		name: 'Next Time Block',
		type: 'array',
		role: 'state',
		unit:  ''
	},
	'openWindow' : {
		name: 'Open Windows',
		type: 'array',
		role: 'state',
		unit:  ''
	},
	'openWindowReminder' : {
		name: 'supports Dazzle',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'outsideTemperature' : {
		name: 'Uutside Temperature',
		type: 'boolean',
		role: 'value.temperature',
		unit:  '°C'
	},
	'overlay' : {
		name: 'Overlay',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'overlayType' : {
		name: 'Overlay Type',
		type: 'mixed',
		role: 'state',
		unit:  ''
	},
	'partner' : {
		name: 'Dazzle  Mode',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'power' : {
		name: 'Power',
		type: 'mixed',
		role: 'switch.power',
		unit:  ''
	}, 	
	'preparation' : {
		name: 'Preparation',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'reportAvailable' : {
		name: 'Report Available',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},	
	'serialNo' : {
		name: 'Serial Number',
		type: 'number',
		role: 'value.voltage',
		unit:  'V'
	},
	'sensorDataPoints' : {
		name: 'Sensor Data Points',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'shortSerialNo' : {
		name: 'Serial Number short',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'supported' : {
		name: 'Supported',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'supportsDazzle' : {
		name: 'supports Dazzle',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'tadoMode' : {
		name: 'Tado Mode',
		type: 'mixed',
		role: 'state',
		unit:  ''
	},
	'temperature' : {
		name: 'Temperature',
		type: 'mixed',
		role: 'value.temperature',
		unit:  '°C'
	},    
	'temperatureUnit' : {
		name: 'temperature Unit',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 
	'timeoutInSeconds' : {
		name: 'TimeoutInSeconds',
		type: 'number',
		role: 'state',
		unit:  's'
	}, 
	'type' : {
		name: 'Type',
		type: 'mixed',
		role: 'state',
		unit:  ''
	}, 

};

module.exports = state_attrb;