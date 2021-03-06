﻿using Solution.Model.Enums;

namespace Solution.Model.Models
{
    public class UserRoleModel
    {
        public Role Role { get; set; }

        public long UserId { get; set; }

        #region Related

        public virtual UserModel User { get; set; }

        #endregion Related
    }
}