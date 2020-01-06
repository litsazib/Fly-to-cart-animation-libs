





// Simple example on click

// $('.yourBtnClass').on('click', function() {
// 	rocketcss(this,'.yourTargetClass', 'rocketPulse');
// 	$('.yourTargetClass').addClass('targetPulse');
// });





$(document).ready(function() {

	/**
	 * Available animations css class are:
	 - rocketPulse
	 - rocketPulseHole
	 - rocketRotate
	 - rocketRotateHole
	 - rocketRotateGo
	 - rocketGost
	 - rocketFlip
	 - rocketCircle
	 */
	 
	function normalstate(norm) {
		$(norm).css({ opacity: "1" });
	}
	
	$('.btn_rocketPulse').on('click', function() {
		rocketcss(this,'.target', 'rocketPulse');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});
	
	$('.btn_rocketPulseHole').on('click', function() {
		rocketcss(this,'.target', 'rocketPulseHole');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});
	
	$('.btn_rocketRotate').on('click', function() {
		rocketcss(this,'.target', 'rocketRotate');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});
	
	$('.btn_rocketRotateHole').on('click', function() {
		rocketcss(this,'.target', 'rocketRotateHole');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});
	
	$('.btn_rocketRotateGo').on('click', function() {
		rocketcss(this,'.target', 'rocketRotateGo');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});
	
	$('.btn_rocketGost').on('click', function() {
		rocketcss(this,'.target', 'rocketGost');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});
	
	$('.btn_rocketFlip').on('click', function() {
		rocketcss(this,'.target', 'rocketFlip');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});
	
	$('.btn_rocketCircle').on('click', function() {
		rocketcss(this,'.target', 'rocketCircle');
		$('.target').addClass('targetPulse');
		setTimeout(function () {
			normalstate('.rocket');
			$('.target').removeClass('targetPulse');
		}, 2300);
	});

});