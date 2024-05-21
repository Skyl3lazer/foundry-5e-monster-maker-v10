const CompatibilityHelpers = (function () {
	//v14 - Property management moved to foundry.utils
	function hasProperty(...args) {
		if (game.version >= 12) {
			return foundry.utils.hasProperty(...args);
		}
		return hasProperty(...args);
	}
	function setProperty(...args) {
		if (game.version >= 12) {
			return foundry.utils.setProperty(...args);
		}
		return setProperty(...args);
	}
	function getProperty(...args) {
		if (game.version >= 12) {
			return foundry.utils.getProperty(...args);
		}
		return getProperty(...args);
	}
	//v14 - clamped becomes clamp
	function clamped(...args) {
		if (game.version >= 12) {
			return Math.clamp(...args);
		}
		return Math.clamped(...args);
	}

	return {
		hasProperty: hasProperty,
		setProperty: setProperty,
		getProperty: getProperty,
		clamp: clamp
	};
})();
export default CompatibilityHelpers;