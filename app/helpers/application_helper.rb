module ApplicationHelper

  def active?(controller, action)
   case controller
   when controller_name
     'active' if action_name == action
   end
 end

end
