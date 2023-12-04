export type InterviewTimeSlotDto = {
    interviewer_name: string;
    interviewer_email: string;
    start_time: Date;
    end_time: Date;
    interviewee?: string;
};

export type InterviewReservationDto = {
    interviewee_id: number;
    timeslot_id: number;
};
