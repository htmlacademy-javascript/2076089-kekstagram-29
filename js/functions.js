const isNormalTime = (startOfDay, endOfDay, startOfMeeting, meetingDuration) => {

  const getNumberFromTime = (arg) => {
    let newNumber = (arg.split(':'));

    if (newNumber[1].length < 2) {
      newNumber[1] = +(newNumber[1]) * 10;
    }

    let minutes = (+newNumber[0] * 60) + (+newNumber[1]);
    return minutes;
  }

  const newStartOfDay = getNumberFromTime(startOfDay);
  const newEndOfday = getNumberFromTime(endOfDay);
  const newStartOfMeeting = getNumberFromTime(startOfMeeting);
  const endOfMeeting = newStartOfMeeting + meetingDuration;

  if (newStartOfDay > newStartOfMeeting || newEndOfday < endOfMeeting) {
    return false;
  } else {
    return true;
  }

}
