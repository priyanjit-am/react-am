import {
  AirmeetRTCClient
} from '../airmeet-rtc-sdk';
import { RTC_CLIENT_CONFIG } from './constants'

const airmeetRTCClient = new AirmeetRTCClient({
  airmeetClientId: RTC_CLIENT_CONFIG.airmeetClientId,
  airmeetAuthToken: RTC_CLIENT_CONFIG.airmeetAuthToken,
  isAutoLayout: false,
})
airmeetRTCClient.setLogLevel(0);

export {
  airmeetRTCClient
};