/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  getProfileInfo(id) {
    const queryBuilder = this.createQueryBuilder('user')
      .select([
        'user.firstName',
        'user.lastName',
        'user.phoneNumber',
        'user.email',
        //'user.address',
        // 'user.profileImage'
      ])

      .where('user.id = :id', { id: id });
    return queryBuilder;
  }

  getLoginSecurityData(id) {
    const queryBuilder = this.createQueryBuilder('user')
      .select([
        'user.passwordUpdateDate',
        'user.email',
        'user.isRegisteredWithGoogle',
        'user.lastLoginDate',
      ])

      .where('user.id = :id', { id: id });
    return queryBuilder;
  }
  getUserImage(id) {
    const queryBuilder = this.createQueryBuilder('user')
      .select(['user.profileImage'])

      .where('user.id = :id', { id: id });
    return queryBuilder;
  }

  findOneByEmailCostume(email: string) {
    const queryBuilder = this.createQueryBuilder('user')
      .select(['user.firstName', 'user.email', 'role.role'])

      .leftJoinAndSelect('user.userRoles', 'user_role')
      .leftJoinAndSelect('user_role.role', 'role')

      .where('user.email = :email', { email: email });
    return queryBuilder;
  }

  updateProfile(profileNewData, id) {
    const queryBuilder = this.createQueryBuilder('user')
      .update(User)
      .set({
        ...profileNewData,
      })
      .where('user.id = :id', { id: id })
      .execute();
    return queryBuilder;
  }

  updateUserNextPeriodTime(id, nextPeriod) {
    const queryBuilder = this.createQueryBuilder('user')
      .update(User)
      .set({
        //nextReminder: Date.now() + nextPeriod
      })
      .where('user.id = :id', { id: id })
      .execute();
    return queryBuilder;
  }

  // decrementNumberOfPostsAllowed(id, updatedPostsLeft){
  //   const queryBuilder = this.createQueryBuilder('user')
  //     .update(User)
  //     .set({
  //          postsLeft: updatedPostsLeft
  //     })
  //     .where('user.id = :id', { id: id })
  //    .execute()
  //   return queryBuilder;
  // }

  // incrementNumberOfPostsAllowed(id, updatedPostsLeft){
  //   const queryBuilder = this.createQueryBuilder('user')
  //     .update(User)
  //     .set({
  //          postsLeft: updatedPostsLeft
  //     })
  //     .where('user.id = :id', { id: id })
  //    .execute()
  //   return queryBuilder;
  // }

  updateTokensPerStore(id, updatedTokens) {
    const queryBuilder = this.createQueryBuilder('user')
      .update(User)
      .set({
        //  storeTokens: updatedTokens
      })
      .where('user.id = :id', { id: id })
      .execute();
    return queryBuilder;
  }

  // updateTokensPerCommunity(id, updatedTokens){
  //   const queryBuilder = this.createQueryBuilder('user')
  //     .update(User)
  //     .set({
  //          communityTokens: updatedTokens
  //     })
  //     .where('user.id = :id', { id: id })
  //    .execute()
  //   return queryBuilder;
  // }

  // updateTokensPerRekrutim(id, updatedTokens){
  //   const queryBuilder = this.createQueryBuilder('user')
  //     .update(User)
  //     .set({
  //          jobTokens: updatedTokens
  //     })
  //     .where('user.id = :id', { id: id })
  //    .execute()
  //   return queryBuilder;
  // }

  // updateTokensPerImobiliare(id, updatedTokens){
  //   const queryBuilder = this.createQueryBuilder('user')
  //     .update(User)
  //     .set({
  //          imobilaireTokens: updatedTokens
  //     })
  //     .where('user.id = :id', { id: id })
  //    .execute()
  //   return queryBuilder;
  // }

  // updateTokensPerJob(id, updatedTokens){
  //   const queryBuilder = this.createQueryBuilder('user')
  //     .update(User)
  //     .set({
  //          communityTokens: updatedTokens
  //     })
  //     .where('user.id = :id', { id: id })
  //    .execute()
  //   return queryBuilder;
  // }
  saveUserData(profileUserData, id) {
    const queryBuilder = this.createQueryBuilder('user')
      .update(User)
      .set({
        ...profileUserData,
      })
      .where('user.id = :id', { id: id })
      .execute();
    return queryBuilder;
  }

  //   updateProfileImage(fileName, id){
  //     const queryBuilder = this.createQueryBuilder('user')
  //     .update(User)
  //     .set({
  //       profileImage: fileName
  //     })
  //     .where('user.id = :id', { id: id })
  //    .execute()
  //   return queryBuilder;
  // }

  /**
   * This part is only for admin purpose
   */

  getAppliedCompaniesByStatus(status: string) {
    const queryBuilder = this.createQueryBuilder('user')
      .select(['user.id', 'user.email', 'user.companyName', 'user.createdAt'])

      .where('user.status = :status', { status: status });
    return queryBuilder;
  }
}
