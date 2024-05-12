import { User } from '@webrtc-advanced/types';

export const actions = {
	SET_CONNECT_ONLY_WITH_AUDIO: 'SET_CONNECT_ONLY_WITH_AUDIO',
	SET_IDENTITY: 'SET_IDENTITY',
	SET_IS_ROOM_HOST: 'SET_IS_ROOM_HOST',
	SET_PARTICIPANTS: 'SET_PARTICIPANTS',
	SET_ROOM_ID: 'SET_ROOM_ID',
	SET_SHOW_OVERLAY: 'SET_SHOW_OVERLAY'
} as const;

export const setConnectOnlyWithAudio = (onlyWithAudio: boolean) => ({
	type: actions.SET_CONNECT_ONLY_WITH_AUDIO,
	data: onlyWithAudio
});

export const setIdentity = (identity: string) => ({
	type: actions.SET_IDENTITY,
	data: identity
});

export const setIsRoomHost = (isRoomHost: boolean) => ({
	type: actions.SET_IS_ROOM_HOST,
	data: isRoomHost
});

export const setParticipants = (participants: User[]) => ({
	type: actions.SET_PARTICIPANTS,
	data: participants
});

export const setRoomId = (roomId: string) => ({
	type: actions.SET_ROOM_ID,
	data: roomId
});

export const setShowOverlay = (showOverlay: boolean) => ({
	type: actions.SET_SHOW_OVERLAY,
	data: showOverlay
});

export type ActionType =
	| ReturnType<typeof setConnectOnlyWithAudio>
	| ReturnType<typeof setIdentity>
	| ReturnType<typeof setIsRoomHost>
	| ReturnType<typeof setParticipants>
	| ReturnType<typeof setRoomId>
	| ReturnType<typeof setShowOverlay>;
