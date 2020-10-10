package bashpound.marketplace.services.member;


import org.springframework.security.core.userdetails.UserDetailsService;

import bashpound.marketplace.domain.model.Delivery;
import bashpound.marketplace.domain.model.Member;


public interface MemberService extends UserDetailsService {

	Member processRegister(Member memberDto);

	Member selectByUsername(String username);
	
	void regDelivery(Delivery delivery);

}
