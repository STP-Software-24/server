import { Router } from 'express';
import { dbClient } from '../services/database';
import { addMember } from '../model/members.recruitment.model';

const memberRecruitmentRouter = Router();

memberRecruitmentRouter.post('/',async (req, res) => {
    const member = req.body;
  try {
      const addedMember = addMember(member)
      res.json({status:"success",data: addedMember});
  } catch(error){
    res.json({
        status: "failure",
        data: (error as Error).message
    });
  }
  
});

export default memberRecruitmentRouter;