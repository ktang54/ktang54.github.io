import StatusEffectType from "../StatusEffectType";
import Activate from "./Activate";
import { XMLActivate } from "./ActivateParser";

@XMLActivate("ConditionEffectSelf")
export default class ConditionEffectSelf implements Activate {
	effect: StatusEffectType = StatusEffectType.Healing;
	duration: number = 0;

	constructor(xml: any) {
		this.effect = StatusEffectType[xml["@_effect"] as keyof typeof StatusEffectType];
		this.duration = xml["@_duration"];
	}

	getName(): string {
		return "ConditionEffectSelf"
	}
}